
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export type RegisterPayload = {
  role: "student" | "teacher";
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  locale: "ar";
  timezone: string;
  acceptTerms: boolean;
  marketingOptIn: boolean;
  clientType: "web";
  gender: "male" | "female";
  dateOfBirth: string;
};

type RegisterSuccess = {
  data: {
    user: {
      id: string;
      email: string;
      firstName: string;
      lastName: string;
      roles: string[];
      status: string;
    };
    tokens?: {
      accessToken: string;
      refreshToken: string;
      tokenType: string;
      expiresIn: number;
    };
  };
};

type TeacherPending = {
  data: {
    user: {
      id: string;
      email: string;
      firstName: string;
      lastName: string;
      status: string;
    };
    status: "pending_approval";
  };
};

export async function registerAccount(payload: RegisterPayload) {
  if (!API_URL) {
    throw new Error("رابط الـ API غير مضبوط في ملف البيئة.");
  }

  const response = await fetch(`${API_URL}/api/v1/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, application/problem+json",
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json().catch(() => null);

  if (!response.ok) {
    const validationErrors = result?.errors
      ?.map((error: { message?: string }) => error.message)
      .filter(Boolean)
      .join("، ");

    throw new Error(
      validationErrors ||
      result?.detail ||
      result?.message ||
      "حدث خطأ أثناء إنشاء الحساب. يرجى المحاولة مجدداً."
    );
  }

  if (response.status === 202) {
    return {
      type: "pending" as const,
      result: result as TeacherPending,
    };
  }

  return {
    type: "created" as const,
    result: result as RegisterSuccess,
  };
}
