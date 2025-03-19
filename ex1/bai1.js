let choice;
let menu = (`
        1. Hiển thị các sản phẩm theo tên danh mục.
        2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
        3. Sắp xếp các sản phẩm trong cửa hàng theo giá:
        4. Tính số tiền thanh toán trong giỏ hàng.
        5. Thoát.
    `)


let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh",
    },
    {
        id: 3,
        name: "com lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh",
    }
]
let giohang = []
while (choice !== 5) {
    choice = +prompt(menu)
    switch (choice) {
        case 1:
            console.table(products)
            break;
        case 2:
            let search_id = +prompt("Mời bạn nhập ID sản phẩm muốn tìm:");
            let vitri_id = products.findIndex(sl => sl.id === search_id);

            if (vitri_id !== -1) {
                let soluongmuonmua;
                do {
                    soluongmuonmua = +prompt("Mời bạn nhập số lượng sản phẩm muốn mua:");
                    if (!Number.isInteger(soluongmuonmua) || soluongmuonmua <= 0) {
                        alert("Số lượng không hợp lệ! Vui lòng nhập lại.");
                    } else if (products[vitri_id].quantity < soluongmuonmua) {
                        alert("Cửa hàng không đủ số lượng! Vui lòng nhập lại.");
                    }
                } while (!Number.isInteger(soluongmuonmua) || soluongmuonmua <= 0 || products[vitri_id].quantity < soluongmuonmua);

                products[vitri_id].quantity -= soluongmuonmua;
                let newmonan = {
                    ten_mon: products[vitri_id].name,
                    gia_tien: products[vitri_id].price,
                    so_luong: soluongmuonmua,
                };
                giohang.push(newmonan);
                alert("Đã mua thành công!");
            } else {
                alert("Không tìm thấy ID sản phẩm!");
            }
            console.table(giohang)
            break;
        case 3:
            let menutanggiam = (`
                1. tang dan
                2. giam dan 
                2. thoat 
                `)
            let lc = +prompt(menutanggiam)
            switch (lc) {
                case 1:
                    products.sort((a, b) => a.price - b.price)
                    console.table(products)
                    break;
                    
                case 2:
                    products.sort((a, b) => b.price - a.price)
                    console.table(products)
                    break;
                case 3:
                    break;
            }

            break;
        case 4:
            let total = giohang.reduce(function(acc, cur) {
               return acc = acc + cur.gia_tien * cur.so_luong
             }, 0)
             alert(total)
            break;
    }
}