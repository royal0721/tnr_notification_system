import { Injectable } from '@nestjs/common';
import fs from 'fs';
import { FormatterService } from './formatter.service';

@Injectable()
export class ChinasunService {

    jsonFile: string;
    formatterService: FormatterService;

    constructor(){
        this.jsonFile=process.cwd()+'/playlist.json';
        this.formatterService= new FormatterService;
    }

    // loop until get the data
    getCurrentTime():string{

        var currentTime = new Date();
        var month = (currentTime.getMonth() + 1);
        var _month;

        // normalize the month
        if (month<10){
            _month = '0'+month.toString();
        }else{
            _month = month.toString();
        }
        
        var _day = currentTime.getDate().toString();
        var _year = currentTime.getFullYear().toString();
        
        return _year+_month+_day;
    
    }

    getUpdatedData(){

        var now = this.getCurrentTime;
        console.log(now);
        var data = fs.readFileSync(this.jsonFile,{encoding:'utf8', flag:'r'});
        var data_json = JSON.parse(data);
        if (typeof data_json != 'undefined'){
            return this.formatterService.FormatData(true,"00000000","Return Programlist Data",data_json);
        }else{
            return this.formatterService.FormatData(false,"04999999","Return Programlist Data",data_json);
        }
        
    }

    

}
