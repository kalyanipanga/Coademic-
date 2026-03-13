const JUDGE0_API_URL = "https://ce.judge0.com";

export interface ExecutionResult {
  language: string;
  version: string;
  run: {
    stdout: string;
    stderr: string;
    output: string;
    code: number;
    signal: string | null;
  };
  compile?: {
    stdout: string;
    stderr: string;
    output: string;
    code: number;
    signal: string | null;
  };
}

const LANGUAGE_ID_MAP: Record<string, number> = {
  python: 71, // Python (3.8.1)
  java: 62,   // Java (OpenJDK 13.0.1)
  cpp: 54,    // C++ (GCC 9.2.0)
};

export async function executeCode(
  language: "python" | "java" | "cpp",
  sourceCode: string,
  stdin?: string
): Promise<ExecutionResult> {
  const languageId = LANGUAGE_ID_MAP[language];

  try {
    const response = await fetch(`${JUDGE0_API_URL}/submissions?base64_encoded=false&wait=true`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        source_code: sourceCode,
        language_id: languageId,
        stdin: stdin || "",
      }),
    }).catch((err) => {
      if (String(err).includes("fetch") || err?.message?.includes("fetch")) {
        throw new Error("Failed to connect to the code execution server. This might be due to an ad-blocker, network issue, or the server being temporarily down.");
      }
      throw err;
    });

    if (!response.ok) {
      if (response.status === 429) {
        throw new Error("Too many requests. Please wait a moment before running again.");
      }
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Execution failed with status ${response.status}`);
    }

    const data = await response.json();

    // Map Judge0 response to our internal ExecutionResult format
    return {
      language: language,
      version: "latest", // Judge0 versions vary
      run: {
        stdout: data.stdout || "",
        stderr: data.stderr || "",
        output: (data.stdout || "") + (data.stderr || ""),
        code: data.exit_code || 0,
        signal: data.status?.description || null,
      },
      compile: data.compile_output ? {
        stdout: "",
        stderr: data.compile_output,
        output: data.compile_output,
        code: 1, // Assume error if compile output exists
        signal: null,
      } : undefined,
    };
  } catch (error: any) {
    console.error("Judge0 execution error:", error);
    throw new Error(error.message || "Failed to execute code");
  }
}
