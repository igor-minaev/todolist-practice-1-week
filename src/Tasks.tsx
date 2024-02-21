import React, {FC} from 'react';

type TaskType = {
    taskId: number
    title: string
    isDone: boolean
}
export type DataType = {
    title: string
    tasks: TaskType[]
    students: string[]
}

type TasksPropsType = {
    data: DataType
}

export const Tasks: FC<TasksPropsType> = ({data}) => {
    const mappedTasks: JSX.Element[] = data.tasks.map(t => {
        return (
            <li key={t.taskId}>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
            </li>
        )
    })
    const mappedStudents: JSX.Element[] = data.students.map((s, i) => {
        return <li key={i}>{s}</li>
    })
    return (
        <div>
            <h1>{data.title}</h1>
            <ul>
                {mappedTasks}
            </ul>
            <ul>
                {mappedStudents}
            </ul>
        </div>
    );
};

