import React from 'react'

function Header({activeRole} : {activeRole: 'teacher' | 'student'}) {

    if(activeRole === 'teacher'){
        return (
            <div className="flex flex-col items-center gap-3">
                <span className="font-amiri text-sm font-semibold tracking-wide text-primary">
                    انضم إلى نخبة المقرئين والمعلمين
                </span>
                <h2 className="text-center font-amiri text-[32px] font-bold leading-[42px] tracking-tight text-text-primary">
                    انضمام مقرئ ومعلم جديد
                </h2>
                <p className="max-w-[512px] text-center font-amiri text-[15px] leading-6 text-text-body">
                    نرحب بانضمامكم لأسرة أكاديمية سفينة الإتقان. يرجى تعبئة النموذج
                    التالي بدقة ليتم مراجعة طلبكم من قبل لجنة الإجازات.
                </p>
            </div>
        )
    }else{
        return(
            <div className="flex flex-col items-center gap-3">
                <h2 className="text-center font-amiri text-[32px] font-bold leading-[42px] tracking-tight text-text-primary">
                     إنشاء حساب طالب جديد
    
                </h2>
                <p className="max-w-[512px] text-center font-amiri text-[15px] leading-6 text-text-body">
                    انضم إلى حلقات الإتقان وتعلّم القرآن الكريم والقراءات العشر بالسند المتصل على يد نخبة من المقرئين المجازين
                </p>
            </div>
        )

    }
  
}

export default Header