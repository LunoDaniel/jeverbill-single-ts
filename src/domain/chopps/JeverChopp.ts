
import { JeverChoppStyle } from "./JeverChoppStyle";
import { JeverChoppType } from "./JeverChoppType";

export class JeverChopp{
    public choppId: number;
	public choppName: string;
	public choppTypes = new Array<JeverChoppType>();
    public style: JeverChoppStyle;
    public quantity: number = 0;
    
    constructor(){}
}