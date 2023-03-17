import s from "../../../../styles/chatOpen.module.css"
import arrows from "../../../../../resources/icons/Arrows.svg"
import { IMessage } from '../../../../../interface/message';
import dayjs from 'dayjs';

export const Time = (value: IMessage) => {
    return <div className={s.timeCheck}>
        <div>{dayjs(value.created_at).format("hh:mm")}</div>
        <img src={arrows} alt='check'/>
    </div>
}