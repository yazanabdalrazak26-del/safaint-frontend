import TeachersGrid from "@/components/teachers/TeacherGrid";
import TeachersHeader from "@/components/teachers/TeacherHead";
import TeachersPagination from "@/components/teachers/TeachersPagination";
import TeachersSearchFilter from "@/components/teachers/TeachersSearchFilter";
import TrustQualitySection from "@/components/teachers/TrustQuakitySection";


export default function TeachersPage() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-6 bg-background-soft pt-10">
      <TeachersHeader />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-8">
        <TeachersSearchFilter />
        <TeachersGrid />
        <TeachersPagination />
        <TrustQualitySection />
      </div>
    </main>
  );
}