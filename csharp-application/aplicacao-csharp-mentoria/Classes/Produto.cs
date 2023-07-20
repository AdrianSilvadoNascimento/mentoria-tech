using System;

namespace Classes
{
    class Produto
    {
        public required string Nome { get; set; }
        public required string Preco { get; set; }

        public virtual void MostrarDetalhes()
        {
            Console.WriteLine("Nome do Produto: " + Nome);
            Console.WriteLine("Valor do Produto: " + Preco);
        }
    }
}