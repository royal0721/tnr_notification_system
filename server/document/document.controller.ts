import { Controller, Get, Response } from '@nestjs/common';
import { DocumentService } from './document.service'; 

@Controller('document')
export class DocumentController {
  
  docService: DocumentService;
  constructor(){
    this.docService= new DocumentService;
  }
  
  @Get()
  getAllDoc(@Response() res) {
   this.docService.getFakeData().subscribe((data)=>{
        return data;
   })
  }

}