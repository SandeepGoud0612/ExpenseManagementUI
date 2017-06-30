import { Project } from '../model/project';
import { Bill } from '../model/bill';
import { Expense } from '../model/expense';
import { Payer } from '../model/payer';
import { Receiver } from '../model/receiver';

export class Payment {
    id: string;
    amount: number;
    date: Date;
    project: Project;
    bill: Bill;
    expense: Expense;
    payer: Payer;
    receiver: Receiver;
}