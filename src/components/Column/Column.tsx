import React, { useMemo } from 'react';
import Card from '../Card';
import "./column.css"
import addIcon from '../../utils/assets/icons/add.svg';
import threeDotMenu from '../../utils/assets/icons/3 dot menu.svg';
import { Ticket, User } from '../../interfaces';
import { getPriorityIcon, getStatusIcon } from '../../utils/helper';
import UserIcon from '../UserIcon';


function Column({ tickets, grouping, groupBy, userIdToData }: { tickets: Ticket[], grouping: string, groupBy: string, userIdToData: Record<string, User> }) {

    const title = useMemo(() => {
        if (grouping === "status")
            return groupBy;
        if (grouping === "priority")
            return groupBy;
        if (grouping === "user")
            return userIdToData[groupBy].name;
    }, [grouping, groupBy]);

    const icon = useMemo(() => {
        if (grouping === "status")
            return getStatusIcon(groupBy);
        if (grouping === "priority")
            return getPriorityIcon(groupBy);
        if (grouping === "user")
            return <UserIcon name={userIdToData[groupBy].name} available={userIdToData[groupBy].available} />
    }, [grouping, groupBy])


    return (
        <div className='column'>
            <div className='column-header'>
                <div className='column-header-left-container'>
                    {icon}
                    <div className='column-title'>
                        {title}
                        <span className='count'>{tickets.length}</span>
                    </div>
                </div>
                <div className='column-header-right-container'>
                    <img src={addIcon} alt="add " width={14} />
                    <img src={threeDotMenu} alt="three Dot Menu" width={14} />
                </div>
            </div>
            <div className='cards-container'>
                {tickets.map((ticket: Ticket) => <Card key={ticket.id} ticket={ticket} userData={userIdToData[ticket.userId]} hideStatusIcon={grouping === "status"} hideProfileIcon={grouping === "user"} />)}
            </div>
        </div>
    );
}

export default Column;
