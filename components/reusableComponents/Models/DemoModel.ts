import { BaseModel } from "./BaseModel";

export interface IDemoModelProps {
    id?: string;
    name?:string;
    title?: string;
}

export class DemoModel extends BaseModel<IDemoModelProps> {
    constructor(props:IDemoModelProps) {
        super(props);
    }
    static resource = 'demo';
}