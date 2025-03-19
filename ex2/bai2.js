let menu = (`
        1. Hiển thị danh sách sách theo thể loại (Người dùng chọn thể loại để xem sách trong danh mục đó).
        2. Thêm sách mới vào kho
        3. Tìm kiếm sách theo tên hoặc id.
        4. Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho).
        5. Sắp xếp sách theo giá:
        6. Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
        7. Hiển thị tổng số lượng sách trong kho.
        8. Thoát chương trình.
    `)
let choice;
let sothutu = 1
let bookstore = []
let giohang = []
function checkgiasach(input) {
    return !isNaN(input) && input > 0
}
function checksoluong(input) {
    return input > 0 && Number.isInteger(input)
}


while (choice !== 8) {
    choice = +prompt(menu)
    switch (choice) {
        case 1:
            let the_loai = prompt("moi ban nhap the loai")
            for (let i = 0; i < bookstore.length; i++) {
                if (bookstore[i].category == the_loai) {
                    console.table(bookstore[i])
                }
            }
            break;
        case 2:
            let ten = prompt("moi ban nhap ten sach")
            let gia;
            do {
                gia = +prompt("moi ban nhap gia sach")
                if (checkgiasach(gia)) {
                    alert("nhap thanh cong")
                } else {
                    alert("nhap khong thanh cong")
                }
            } while (!checkgiasach(gia));
            let soluong;
            do {
                soluong = +prompt("moi ban nhap so luong")
                if (checksoluong(soluong)) {
                    alert("nhap thanh cong")
                } else {
                    alert("nhap khong thanh cong , xin moi nhap lai")
                }
            } while (!checksoluong(soluong));
            let theloai = prompt("moi ban nhap the loai ")
            let newbook = {
                id: sothutu++,
                name: ten,
                price: gia,
                quantity: soluong,
                category: theloai
            }
            bookstore.push(newbook)
            console.table(bookstore)
            break;
        case 3:
            let search = prompt("moi ban nhap ten hoac id")
            let vitri = bookstore.findIndex(function (sl) {
                return sl.id == search || sl.name == search
            })
            if (vitri !== -1) {
                console.table(bookstore[vitri])
            } else {
                alert("id hoac ten khong co trong cua hang")
            }
            break;
        case 4:
            let muahang = prompt("moi ban nhap ten hoac id")
            let VTmuahang = bookstore.findIndex(function (sl) {
                return sl.id == muahang || sl.name == muahang
            })
            if (VTmuahang !== -1) {
                let soluongmuonmua = +prompt("moi ban nhap so luong muon mua")
                let shopping = {
                    newten: bookstore[VTmuahang].name,
                    monny: bookstore[VTmuahang].price,
                    soluong: soluongmuonmua
                }
                giohang.push(shopping)
                bookstore[VTmuahang].quantity = bookstore[VTmuahang].quantity - soluongmuonmua
                console.table(giohang)
            } else {
                alert("id hoac ten khong co trong cua hang")
            }

            break;
            case 5:
                let menutanggiam = `
                    1. Tăng dần
                    2. Giảm dần
                `;
                let lc = +prompt(menutanggiam);
            
                if (bookstore.length === 0) {
                    alert("Không có sách trong cửa hàng!");
                    break;
                }
            
                if (lc === 1) {
                    bookstore.sort((a, b) => a.price - b.price); 
                    console.log("Sắp xếp theo giá tăng dần:");
                } else if (lc === 2) {
                    bookstore.sort((a, b) => b.price - a.price);
                    console.log("Sắp xếp theo giá giảm dần:");
                } else {
                    alert("Lựa chọn không hợp lệ!");
                    break;
                }
            
                console.table(bookstore);
                break;
            case 6:
                let total = giohang.reduce(function(acc , cur) {
                    return acc = acc + cur.monny * cur.soluong
                }, 0)
                alert(`Tổng tiền: ${total} VND`);
                break;
            case 7:
                console.table(bookstore)
                break;
   }
}