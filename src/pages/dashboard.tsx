//
// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
//
// interface Exercise {
//     name: string;
//     sets: number;
//     reps: number;
// }
//
// interface WorkoutPlan {
//     date: string; // 格式为 'YYYY-MM-DD'
//     exercises: Exercise[];
// }
//
// const Dashboard: React.FC = () => {
//     const [currentDate, setCurrentDate] = useState<Date>(new Date());
//     const [workoutPlans, setWorkoutPlans] = useState<WorkoutPlan[]>([]);
//     const router = useRouter();
//
//     useEffect(() => {
//         // 获取当前周的健身计划
//         const fetchWorkoutPlans = async () => {
//             const year = currentDate.getFullYear();
//             const month = currentDate.getMonth() + 1; // 月份从0开始，需要加1
//             const day = currentDate.getDate();
//             const response = await fetch(`/api/workout-plans?year=${year}&month=${month}&day=${day}`);
//             const data = await response.json();
//             setWorkoutPlans(data);
//         };
//
//         fetchWorkoutPlans();
//     }, [currentDate]);
//
//     const navigateTo = (path: string) => {
//         router.push(path);
//     };
//
//     // 获取一周内的日期
//     const getWeekDates = (date: Date) => {
//         const startOfWeek = new Date(date);
//         startOfWeek.setDate(date.getDate() - date.getDay()); // 周日为一周的第一天
//         const weekDates = [];
//         for (let i = 0; i < 7; i++) {
//             const weekDate = new Date(startOfWeek);
//             weekDate.setDate(startOfWeek.getDate() + i);
//             weekDates.push(weekDate);
//         }
//         return weekDates;
//     };
//
//     const renderWeek = () => {
//         const weekDates = getWeekDates(currentDate);
//
//         return (
//             <div style={styles.weekContainer}>
//                 {weekDates.map((date, index) => {
//                     const dateString = date.toISOString().split('T')[0];
//                     const plan = workoutPlans.find((wp) => wp.date === dateString);
//
//                     return (
//                         <div key={index} style={styles.dayContainer} onClick={() => onDateClick(date)}>
//                             <div style={styles.dayHeader}>{date.toDateString()}</div>
//                             {plan ? (
//                                 <ul style={styles.planList}>
//                                     {plan.exercises.map((exercise, idx) => (
//                                         <li key={idx}>
//                                             {exercise.name} - {exercise.sets} sets x {exercise.reps} reps
//                                         </li>
//                                     ))}
//                                 </ul>
//                             ) : (
//                                 <p style={styles.noPlanText}>No Plan</p>
//                             )}
//                         </div>
//                     );
//                 })}
//             </div>
//         );
//     };
//
//     const onDateClick = (date: Date) => {
//         // 点击日期时的处理
//         const dateString = date.toISOString().split('T')[0];
//         const plan = workoutPlans.find((wp) => wp.date === dateString);
//
//         if (plan) {
//             alert(`Workout plan for ${dateString}:\n${plan.exercises.map((ex) => ex.name).join(', ')}`);
//         } else {
//             alert(`No workout plan for ${dateString}.`);
//         }
//     };
//
//     const goToPreviousWeek = () => {
//         const newDate = new Date(currentDate);
//         newDate.setDate(currentDate.getDate() - 7); // 往前跳一周
//         setCurrentDate(newDate);
//     };
//
//     const goToNextWeek = () => {
//         const newDate = new Date(currentDate);
//         newDate.setDate(currentDate.getDate() + 7); // 往后跳一周
//         setCurrentDate(newDate);
//     };
//
//     return (
//         <div style={styles.container}>
//             <h1>欢迎来到你的健身仪表板</h1>
//             <div style={styles.buttonContainer}>
//                 <button style={styles.navButton} onClick={goToPreviousWeek}>
//                     {'<'} 上一周
//                 </button>
//                 <h2>当前周：{`${currentDate.getFullYear()}年 第${Math.ceil((currentDate.getDate() + 6) / 7)}周`}</h2>
//                 <button style={styles.navButton} onClick={goToNextWeek}>
//                     下一周 {'>'}
//                 </button>
//             </div>
//             <div>{renderWeek()}</div>
//             <div style={styles.buttonContainer}>
//                 <button style={styles.button} onClick={() => navigateTo('/share')}>
//                     分享你的健身记录
//                 </button>
//                 <button style={styles.button} onClick={() => navigateTo('/exercises')}>
//                     查看健身动作
//                 </button>
//                 <button style={styles.button} onClick={() => navigateTo('/recipe')}>
//                     记录你的食谱
//                 </button>
//             </div>
//         </div>
//     );
// };
//
// const styles = {
//     container: {
//         padding: '20px',
//         textAlign: 'center' as const,
//     },
//     weekContainer: {
//         display: 'flex',
//         justifyContent: 'space-around',
//         marginBottom: '20px',
//     },
//     dayContainer: {
//         width: '100px',
//         padding: '10px',
//         border: '1px solid #ccc',
//         borderRadius: '5px',
//         cursor: 'pointer',
//     },
//     dayHeader: {
//         fontWeight: 'bold' as const,
//         marginBottom: '5px',
//     },
//     planList: {
//         listStyleType: 'none' as const,
//         padding: 0,
//     },
//     noPlanText: {
//         color: '#aaa',
//     },
//     buttonContainer: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         gap: '10px',
//         marginBottom: '20px',
//     },
//     button: {
//         padding: '10px 20px',
//         fontSize: '16px',
//         cursor: 'pointer',
//     },
//     navButton: {
//         padding: '5px 10px',
//         fontSize: '14px',
//         cursor: 'pointer',
//     },
// };
//
// export default Dashboard;



import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface Exercise {
    name: string;
    sets: number;
    reps: number;
}

interface WorkoutPlan {
    date: string; // 格式为 'YYYY-MM-DD'
    exercises: Exercise[];
}

const Dashboard: React.FC = () => {
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [workoutPlans, setWorkoutPlans] = useState<WorkoutPlan[]>([]);
    const [editingPlan, setEditingPlan] = useState<WorkoutPlan | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        // 获取当前周的健身计划
        const fetchWorkoutPlans = async () => {
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth() + 1; // 月份从0开始，需要加1
            const day = currentDate.getDate();
            const response = await fetch(`/api/workout-plans?year=${year}&month=${month}&day=${day}`);
            const data = await response.json();
            setWorkoutPlans(data);
        };

        fetchWorkoutPlans();
    }, [currentDate]);

    const getWeekDates = (date: Date) => {
        const startOfWeek = new Date(date);
        startOfWeek.setDate(date.getDate() - date.getDay()); // 周日为一周的第一天
        const weekDates = [];
        for (let i = 0; i < 7; i++) {
            const weekDate = new Date(startOfWeek);
            weekDate.setDate(startOfWeek.getDate() + i);
            weekDates.push(weekDate);
        }
        return weekDates;
    };

    const handleDateClick = (date: Date) => {
        const dateString = date.toISOString().split('T')[0];
        const plan = workoutPlans.find((wp) => wp.date === dateString) || { date: dateString, exercises: [] };
        setEditingPlan(plan);
        setShowModal(true);
    };

    const handleExerciseChange = (index: number, field: string, value: string | number) => {
        if (editingPlan) {
            const updatedExercises = [...editingPlan.exercises];
            updatedExercises[index] = { ...updatedExercises[index], [field]: value };
            setEditingPlan({ ...editingPlan, exercises: updatedExercises });
        }
    };

    const addExercise = () => {
        if (editingPlan) {
            setEditingPlan({
                ...editingPlan,
                exercises: [...editingPlan.exercises, { name: '', sets: 0, reps: 0 }],
            });
        }
    };

    const handleSave = async () => {
        if (editingPlan) {
            // 将编辑后的 workout plan 发送到后端
            await fetch('/api/save-workout-plan', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editingPlan),
            });

            // 更新本地的 workout plan 列表
            setWorkoutPlans((prev) => {
                const existingPlanIndex = prev.findIndex((wp) => wp.date === editingPlan.date);
                if (existingPlanIndex !== -1) {
                    prev[existingPlanIndex] = editingPlan;
                } else {
                    prev.push(editingPlan);
                }
                return [...prev];
            });

            setShowModal(false);
        }
    };

    const goToPreviousWeek = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() - 7); // 往前跳一周
        setCurrentDate(newDate);
    };

    const goToNextWeek = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + 7); // 往后跳一周
        setCurrentDate(newDate);
    };

    const navigateTo = (path: string) => {
        router.push(path);
    };

    const renderWeek = () => {
        const weekDates = getWeekDates(currentDate);

        return (
            <div style={styles.weekContainer}>
                {weekDates.map((date, index) => {
                    const dateString = date.toISOString().split('T')[0];
                    const plan = workoutPlans.find((wp) => wp.date === dateString);

                    return (
                        <div key={index} style={styles.dayContainer} onClick={() => handleDateClick(date)}>
                            <div style={styles.dayHeader}>{date.toDateString()}</div>
                            {plan ? (
                                <ul style={styles.planList}>
                                    {plan.exercises.map((exercise, idx) => (
                                        <li key={idx}>
                                            {exercise.name} - {exercise.sets} sets x {exercise.reps} reps
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p style={styles.noPlanText}>No Plan</p>
                            )}
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div style={styles.container}>
            <h1>欢迎来到你的健身仪表板</h1>
            <div style={styles.buttonContainer}>
                <button style={styles.navButton} onClick={goToPreviousWeek}>
                    {'<'} 上一周
                </button>
                <h2>当前周：{`${currentDate.getFullYear()}年 第${Math.ceil((currentDate.getDate() + 6) / 7)}周`}</h2>
                <button style={styles.navButton} onClick={goToNextWeek}>
                    下一周 {'>'}
                </button>
            </div>
            <div>{renderWeek()}</div>
            <div style={styles.buttonContainer}>
                <button style={styles.button} onClick={() => navigateTo('/share')}>
                    分享你的健身记录
                </button>
                <button style={styles.button} onClick={() => navigateTo('/exercises')}>
                    查看健身动作
                </button>
                <button style={styles.button} onClick={() => navigateTo('/recipe')}>
                    记录你的食谱
                </button>
            </div>

            {showModal && (
                <div style={styles.modal}>
                    <h2>Edit Workout Plan</h2>
                    {editingPlan?.exercises.map((exercise, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={exercise.name}
                                onChange={(e) => handleExerciseChange(index, 'name', e.target.value)}
                                placeholder="Exercise Name"
                            />
                            <input
                                type="number"
                                value={exercise.sets}
                                onChange={(e) => handleExerciseChange(index, 'sets', parseInt(e.target.value))}
                                placeholder="组数"
                            />
                            <input
                                type="number"
                                value={exercise.reps}
                                onChange={(e) => handleExerciseChange(index, 'reps', parseInt(e.target.value))}
                                placeholder="每组次数"
                            />
                        </div>
                    ))}
                    <button onClick={addExercise}>Add Exercise</button>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setShowModal(false)}>Cancel</button>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        textAlign: 'center' as const,
    },
    weekContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '20px',
    },
    dayContainer: {
        width: '100px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    dayHeader: {
        fontWeight: 'bold' as const,
        marginBottom: '5px',
    },
    planList: {
        listStyleType: 'none' as const,
        padding: 0,
    },
    noPlanText: {
        color: '#aaa',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '20px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
    },
    navButton: {
        padding: '5px 10px',
        fontSize: '14px',
        cursor: 'pointer',
    },
    modal: {
        position: 'fixed' as const,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        padding: '20px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
    },
};

export default Dashboard;

