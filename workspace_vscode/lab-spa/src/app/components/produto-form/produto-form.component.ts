import { Component } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { IProduto } from 'src/app/models/produto.model';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent {
  //inputs
  descricao: string = '';
  preco: number = 0;

  constructor(private produtoService: ProdutoService) { }
  onCadastrar() {
    let produto: IProduto = { descricao: this.descricao, preco: this.preco };
    this.produtoService.create(produto).subscribe({
      next: (data) => {
        produto = data;
        const tit = 'Sucesso';
        const msg = 'Produto salvo com sucesso';
        console.log(tit, msg);
        this.router.navigate(['/produtotabela'])
      },
      error: (e) => {
        const tit = 'Erro';
        const msg = e.message;
        console.log(tit, msg);
      }
    });
  }

}
