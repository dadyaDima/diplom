import React from "react";

const MeetingUsers = ({userMeetYouCount}) => {
    const setWariableWord = () => {
        const lastNum = Number(String(userMeetYouCount).slice(-1))

        if(lastNum === 1 ) return 'Человек тусанет '
        if(userMeetYouCount > 4 && userMeetYouCount < 21) return 'Человек тусанут '
        if([2, 3, 4].indexOf(lastNum) >= 0 ) return 'Человека тусанут ' 
    }
    
    return (userMeetYouCount > 0) 
           ? <button type="button" className="btn btn-primary">
                <span className="badge bg-secondary">{userMeetYouCount}</span> {setWariableWord() + 'с тобой сегодня'} 
             </button>
           : <span className="badge bg-danger">На сегодня ты остался один :(</span>
}

export default MeetingUsers