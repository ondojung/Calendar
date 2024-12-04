type LabelType = {
    color:string,
    name:string
} 

export default interface Event {
    id: number;
    title: string;
    allDays:boolean,
    startsDate:string;
    startsTime:string;
    endsDate:string;
    endsTime:string;
    label?:LabelType;
    attachment?:object;
}
