# public-key-crypto-js
## Cài đặt và Mô phỏng các thuật toán:

* Thuật toán Euclid tính ước số chung: gcd(`a`, `b`)
* Thuật toán Euclid mở rộng tính nghịch đảo `b` theo modulo `a`: egcd(`a`, `b`)
* Thuật toán bình phương và nhân tính `x` lũy thừa `e` theo modulo `n`: powmod(`x`, `e`, `n`)
* Tìm phần tử nguyên thủy (sinh): `alpha`

## Chương trình mô phỏng

### 1. File `index.html` mô phỏng các thuật toán

1. Thuật toán Euclid tính ước số chung: gcd(`a`, `b`)
2. Thuật toán Euclid mở rộng tính nghịch đảo `b` theo modulo `a`: egcd(`a`, `b`)
3. Thuật toán bình phương và nhân
4. Tìm phần tử nguyên thủy (sinh)

Demo: [index.html](index.html)

![Chương trình mô phỏng][1-thuat-toan-cai-dat]

### 2. File `rsa.html` mô phỏng thuật toán RSA và tạo chữ ký sô

1. Thuật toán RSA với đầu vào là: `p`, `q`, `e`
2. ~~Sinh ngẫu nhiên phần tử `e`~~
3. Ký văn bản bằng lược đồ RSA

Demo: [rsa.html](rsa.html)

![Mô phỏng thuật toán RSA][2-mo-phong-rsa]

### 3. File `elgamal.html` mô phỏng thuật toán Elgamal và tạo chữ ký số

1. Thuật toán Elgamal nhận đầu vào là: `p`, `a`, `k`, `x`
2. Sinh phần tử nguyên thủy tương ứng số nguyên tố `p` 
3. Ký văn bản bằng lược đồ Elgamal

Demo: [elgamal.html](elgamal.html)

### TODO List
- ~~Tạo chữ ký số bằng lược đồ Elgamal~~
- ~~Mô phỏng thuật toán Elgamal và tạo chữ ký số~~


[1-thuat-toan-cai-dat]: https://github.com/vunb/anhttt/raw/master/images/thuat-toan-cai-dat.PNG
[2-mo-phong-rsa]: https://github.com/vunb/anhttt/raw/master/images/mo-phong-rsa.PNG