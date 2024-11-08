#include <chrono>
#include <iostream>
#include <vector>
#include <algorithm> // untuk std::swap

// Fungsi untuk menukar dua elemen
void swap(int &a, int &b)
{
   int temp = a;
   a = b;
   b = temp;
}

// Fungsi untuk membagi array dan menemukan pivot
int partition(std::vector<int> &arr, int low, int high)
{
   int pivot = arr[high]; // Pilih elemen paling kanan sebagai pivot
   int i = low - 1;       // Indeks elemen yang lebih kecil

   for (int j = low; j < high; j++)
   {
      // Jika elemen saat ini lebih kecil dari atau sama dengan pivot
      if (arr[j] <= pivot)
      {
         i++;                  // Indeks elemen yang lebih kecil meningkat
         swap(arr[i], arr[j]); // Tukar elemen
      }
   }
   swap(arr[i + 1], arr[high]); // Tukar pivot dengan elemen setelah elemen yang lebih kecil
   return (i + 1);              // Kembalikan indeks pivot
}

// Fungsi quicksort utama
void quickSort(std::vector<int> &arr, int low, int high)
{
   if (low < high)
   {
      // Temukan indeks pivot sehingga elemen di kiri lebih kecil dan elemen di kanan lebih besar
      int pi = partition(arr, low, high);

      // Panggil quicksort untuk bagian kiri dan kanan dari pivot
      quickSort(arr, low, pi - 1);
      quickSort(arr, pi + 1, high);
   }
}

int main()
{
   // pick time before execution
   auto start = std::chrono::high_resolution_clock::now();

   // Contoh penggunaan
   std::vector<int> arr = {10, 7, 8, 9, 1, 5, 1, 2, 3, 1, 1, 10, 23, 12, 32};

   std::cout << "Array sebelum sorting: ";
   for (int num : arr)
      std::cout << num << " ";
   std::cout << std::endl;

   quickSort(arr, 0, arr.size() - 1);

   std::cout << "Array setelah sorting: ";
   for (int num : arr)
      std::cout << num << " ";
   std::cout << std::endl;

   // pick time after execution
   auto end = std::chrono::high_resolution_clock::now();
   std::chrono::duration<double> duration = end - start;
   std::cout << "waktu eksekusi: " << duration.count() << " detik" << std::endl;

   return 0;
}
