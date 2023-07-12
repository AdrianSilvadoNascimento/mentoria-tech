using System;

namespace Classes
{
    class Livro : Produto
    {
        public string Autor { get; set; }

        public override void MostrarDetalhes()
        {
            base.MostrarDetalhes();
            Console.WriteLine("Autor :" + Autor);
        }
    }

}