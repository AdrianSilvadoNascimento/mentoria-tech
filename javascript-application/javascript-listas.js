// Econtro de hoje será a continuação dos assuntos sobre listas.

/**
 * Começaremos a entender os tipos de estruturas de dados.
 * 
 * As estruturas de dados mais comuns são: Filas (Queue), FIFO, LIFO.
 */

// Exemplos em cada uma das linguagens de programação:
/**
 * Arrays:
 * 
 * Javascript:
 * let array1 = [1, 2, 3, 4, 5];
 * let array2 = ['a', 'b', 'c'];
 * console.log(array1[2]);  // Saída: 3
 * console.log(array2.length);  // Saída: 3
 * 
 * Python:
 * array1 = [1, 2, 3, 4, 5]
 * array2 = ['a', 'b', 'c']
 * print(array1[2])  # Saída: 3
 * print(len(array2))  # Saída: 3
 * 
 * C#:
 * int[] array1 = { 1, 2, 3, 4, 5 };
 * string[] array2 = { "a", "b", "c" };
 * Console.WriteLine(array1[2]);  // Saída: 3
 * Console.WriteLine(array2.Length);  // Saída: 3
 * 
 * Listas
 * 
 * Javascript:
 * let array1 = [1, 2, 3, 4, 5]
 * let array2 = ['a', 'b', 'c']
 * 
 * array1.push(4)
 * array2.pop()
 * console.log(array1)
 * console.log(array2)
 * 
 * Python:
 * array1 = [1, 2, 3, 4, 5]
 * array2 = ['a', 'b', 'c']
 * 
 * array1.append(6)
 * array2.remove('c')
 * 
 * print(array1)
 * print(array2)
 * 
 * C#:
 * List<int> list1 = new List<int> { 1, 2, 3 };
 * List<string> list2 = new List<string> { "maçã", "banana", "laranja" };
 * list1.Add(4);
 * list2.Remove("laranja");
 * foreach (int num in list1)
 * {
 *      Console.WriteLine(num);
 * }
 * 
 * foreach (string fruit in list2)
 * {
 *     Console.WriteLine(fruit);
 * }
 * 
 */

// let pessoa1 = {
//   nome: 1
// }
// let pessoa2 = {
//   nome: 'Keven'
// }
// let pessoa3 = {
//   nome: false
// }


// const listaPessoas1 = []
// const listaPessoas2 = [pessoa1, pessoa2, pessoa3]

// let nomes = ['João', 'Ângelo', 'Ricardo', 'Luis', 'Keven']

// console.log('lista antes:', listaPessoas1)
// for (let index = 0; index < listaPessoas2.length; index++) {
//   listaPessoas1.push(listaPessoas2[index].nome)
// }
// console.log('lista depois:', listaPessoas1)

// for (let nome in nomes) {
  
// }


// console.log('lista1', listaPessoas1)
// console.log('lista2', listaPessoas2)

// console.log(pessoa1.nome)
// console.log(pessoa2.nome)
// console.log(pessoa3.nome)


// ------- * DESAFIOS * ------- //

// 1 - Encontre o segundo menor elemento de um array

// Em Javascript
// const arr = [1, 58, 6, 98, 32]
// const first = Math.min(...arr)

// const auxArr = arr.map(b => b).filter(a => a != first)
// const second = Math.min(...auxArr)

// console.log('Array:', arr)
// console.log('First:', first)
// console.log('Second:', second)

// Em C#
// using System;
// using System.Linq;

// class Program
// {
//     static void Main()
//     {
//         int[] arr = { 1, 58, 6, 98, 32 };
//         int first = arr.Min();

//         int[] auxArr = arr.Where(a => a != first).ToArray();
//         int second = auxArr.Min();

//         Console.WriteLine("Array: " + string.Join(", ", arr));
//         Console.WriteLine("First: " + first);
//         Console.WriteLine("Second: " + second);
//     }
// }

// Em Python
// arr = [1, 58, 6, 98, 32]
// first = min(arr)

// auxArr = [b for b in arr if b != first]
// second = min(auxArr)

// print('Array:', arr)
// print('First:', first)
// print('Second:', second)


/**
 * ---------- SEGUNDO DESAFIO ----------
 * 1 - Crie uma lista com alguns valores;
 * 2 - Peça para o usuário digitar algum valor;
 * 3 - Verifique se o valor que o usuário digital existe na sua lista;
 * 4 - Se tiver, mostre o valor na tela, se não, exiba uma mensagem que não encontrou.
 */

