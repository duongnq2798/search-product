# Test 2: Tìm kiếm sản phẩm

### Cách cài đặt và khởi động dự án

1. Cài đặt các thành phần phụ thuộc: `yarn install / npm install`

2. Khởi động dự án: `yarn dev / npm run dev`

### Cách hoạt động của dự án

- Gồm 1 ô input để người dùng có thể nhập tên của sản phẩm cần tìm.

- Khi dữ liệu được nhập vào thì mình sẽ chạy vòng lặp qua từng phần tử trong mảng sản phẩm để tim ra tên của sản phẩm trùng với nội dung mà người dùng đã nhập
    + Trong đây mình cần chuyển về chữ thường để kiểm tra vì trong trường hợp người dùng không nhập từng chữ vào gồm cả chữ cái hoa và chữ cái thường thì dù là về mặt chữ thì giống nhau nhưng sẽ không trả ra kết quả chính xác.
    + Sau khi có kết quả tìm kiếm thì giao diện sẽ hiển thị 
        
        + Nếu không tìm được kết quả phù hợp thì hiển thị "Kết quả tìm kiếm : 0 sản phẩm"
        + Nếu tìm được thì hiển thị số lượng kết quả tìm kiếm được và thông tin của các sản phẩm thỏa điều kiện.

- Về giao diện sẽ hiển thị danh sách các sản phẩm bên dưới ô input bao gồm hình ảnh, tên sản phẩm, giảm giá, giá sản phẩm và số lượng sản phẩm còn lại
    + Đối với các sản phẩm có giá là 0 hoặc số lượng nhỏ hơn hoặc bằng không thì hiển thị trạng thái hết hàng đề người dùng.


### Kết quả thử nghiệm

     https://search-product-xi.vercel.app/   