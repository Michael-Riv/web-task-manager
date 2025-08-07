import {z} from 'zod';
//form validator 
export const taskSchema=z.object({
    title:z.string().min(1,'Title is required'),
    urgency:z.enum(['1','2','3','4','5'], {errorMap: ()=>({message:'urgency is required'})}),
    dueDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)'),
    dueTime:z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Invalid time format (HH:MM)'),
    description:z.string().optional(),
});