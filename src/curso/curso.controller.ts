import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { CursoService } from './curso.service';

@Controller('curso')
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}

  @Get('')
  async getAllCurso(){
    try{
      return await this.cursoService.getAllCurso();
    }
    catch(e){
      console.log(e);
      throw e;
    }
  }
}
