import {styled} from "@mui/material";
import {ToDoTypes} from "../../types/toDoTypes";

const MainBlock = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 16px;
  width: 220px;
  height: 64px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 16px 3px;
`
const StyledImg = styled('img')`
  width: 24px;
  height: 24px;
  border-radius: 1000px;
`
const Time = styled('p')`
  width: 105px;
  height: 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.004em;
  color: #787878;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 6px;
`
const TopBlock = styled('div')`
  display: flex;
  width: 228px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const BottomBlock = styled('div')`
  width: 196px;
  height: 18px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #1D1D1F;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 8px 0px;
`
const TaskType = styled('div')`
`
const GreenType = styled('div')`
  background: #27AE60;
  padding: 0 6px;
  border-radius: 4px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.004em;
  color: #FFFFFF;
`
const BlueType = styled('div')`
  background: #1369BF;
  border-radius: 4px;
  padding: 0 6px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.004em;
  color: #FFFFFF;
`

type Props = {
    toDo: ToDoTypes
}
function formattedTime(date:Date|string){
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let date1 = new Date(date);
    let minutes = "00";
    if(date1.getMinutes()<10){
        minutes = '0'+date1.getMinutes()
    }else{
        minutes = ''+date1.getMinutes()
    }
    return date1.getDay() + " " + monthNames[date1.getMonth()] + ', в '+ date1.getHours()+':'+minutes
}
function formattedName(name: string | undefined){
    let res = 'No name'
    if(typeof name === "string"){
        let letter = name.split(' ')[1]
        if(letter != undefined) {
            letter = letter.charAt(0)
            let res = name.split(' ')[0] + ' ' + letter
            return res
        }
        let res = name.split(' ')[0]
        return res
    }

    return res
}

export function ToDoItem({toDo}:Props){

    let time = formattedTime(toDo.plannedStartTime);
    let name = formattedName(toDo.clientName);
    return(
        <MainBlock>
            <TaskType>
                {toDo.taskTypeName === 'Встреча'?
                <GreenType>{toDo.taskTypeName}</GreenType>:
                    <BlueType>{toDo.taskTypeName}</BlueType>
                }
            </TaskType>
            <TopBlock>
                <Time>
                    {time}
                </Time>
                <StyledImg src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzvsGN4tI842XHa3v2O1cUFuQTI5RQ4sn9eWrKppo9onMaic5GyWD51nVbU2p9QhJmzDM&usqp=CAU' alt=''/>
            </TopBlock>
            <BottomBlock>
                {name}
            </BottomBlock>
        </MainBlock>
    )
}