import threeDotMenu from './assets/icons/3 dot menu.svg';
import addIcon from './assets/icons/add.svg';
import backlogIcon from './assets/icons/Backlog.svg';
import cancelledIcon from './assets/icons/Cancelled.svg';
import displayIcon from './assets/icons/Display.svg';
import doneIcon from './assets/icons/Done.svg';
import downIcon from './assets/icons/down.svg';
import highPriorityIcon from './assets/icons/Img - High Priority.svg';
import lowPriorityIcon from './assets/icons/Img - Low Priority.svg';
import mediumPriorityIcon from './assets/icons/Img - Medium Priority.svg';
import inProgressIcon from './assets/icons/in-progress.svg';
import noPriorityIcon from './assets/icons/No-priority.svg';
import urgentPriorityColorIcon from './assets/icons/SVG - Urgent Priority colour.svg';
import urgentPriorityGreyIcon from './assets/icons/SVG - Urgent Priority grey.svg';
import todoIcon from './assets/icons/To-do.svg';

export const getPriorityIcon = (priority: string) => {
    switch (priority) {
        case "No priority": return <img src={noPriorityIcon} alt="No Priority" width={14} />
        case "Low": return <img src={lowPriorityIcon} alt="Low Priority" width={14} />
        case "Medium": return <img src={mediumPriorityIcon} alt="Medium Priority" width={14} />
        case "High": return <img src={highPriorityIcon} alt="High Priority" width={14} />
        case "Urgent": return <img src={urgentPriorityColorIcon} alt="Urgent Priority" width={14} />
        default: return <img src={urgentPriorityGreyIcon} alt="Urgent Priority" width={14} />
    }
}
export const getStatusIcon = (status: string) => {
    switch (status) {
        case "Backlog": return <img src={backlogIcon} alt="Backlog" width={24} />
        case "Todo": return <img src={todoIcon} alt="Todo" width={24} />
        case "In progress": return <img src={inProgressIcon} alt="In Progress" width={16} />
        case "Done": return <img src={doneIcon} alt="Done" width={16} />
        case "Canceled": return <img src={cancelledIcon} alt="Cancelled" width={16} />
        default: return <img src={cancelledIcon} alt="Cancelled" width={16} />
    }
}
