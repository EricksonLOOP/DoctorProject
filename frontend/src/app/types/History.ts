
import { UserDto } from "./User"
export type HistoryData = {
    initHour: string;
    finishHour: string;
    scheduledDate: string;
    id: string;

}
export type HistoryDto = {
    history: HistoryData;
    patient: UserDto;
    doctor: UserDto;
}