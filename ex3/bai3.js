let choice;
let sothutu = 1;
let shopphone = []
let menu = (`
        1. Hiển thị danh sách điện thoại theo hãng (Ví dụ: Samsung, Apple, Xiaomi…)
        2. Thêm điện thoại mới vào cửa hàng (Nhập thông tin: id, tên điện thoại, giá, số lượng, hãng)
        3. Tìm kiếm điện thoại theo tên hoặc id
        4. Mua điện thoại (Nhập id điện thoại cần mua và số lượng, cập nhật lại cửa hàng)
        5. Thanh toán tất cả điện thoại trong giỏ hàng (Thông báo thanh toán thành công, và xóa toàn bộ giỏ hàng)
        6. Sắp xếp điện thoại theo giá:
        7. Hiển thị tổng số tiền của các điện thoại trong kho
        8. Hiển thị tổng số lượng điện thoại theo từng hàng (VD: samsung - 5,iphone - 3,...)
        9. Thoát chương trình
    `)
    
function checkgia(input) {
        return !isNaN(input) && input > 0 
}
function checksoluong(input) {
        return Number.isInteger(input) && input > 0 
}
    while (choice !== 9 ) {
        choice = +prompt(menu)
        switch (choice) {
            case 1:
            
                break;
            case 2:
                let ten = prompt("moi ban nhap ten dien thoai")

                let gia ;
                do {
                    gia = +prompt("moi ban nhap gia cua dien thoai")
                    if(checkgia(gia)) {
                        alert("nhap gia thanh cong")
                    }else{
                        alert("nhap gia khong hop le")
                    }
                } while (!checkgia(gia));



                let so_luong ;
                do {
                    so_luong = +prompt("moi ban nhap so luong hang") 
                    if(checksoluong(so_luong)) {
                        alert("so luong hop le")
                    }else{
                        alert("so luong nhap vao hop le")
                    }
                } while (!checksoluong(so_luong));

                let hang = prompt("moi ban nhap hang dien thoai")

                let newphone = {
                    id: sothutu++,
                    name: ten,
                    monny:gia,
                    quantity:so_luong,
                    phone_company:hang
                }
                shopphone.push(newphone)
                console.table(shopphone)
                break;
            case 3:
                let input = prompt("moi ban nhap ten hoac id")
                let vitri_input = shopphone.findIndex(function(sl) {
                    return sl.id == input || sl.name == input
                })  
                if(vitri_input !== -1 ) {
                    alert("tim thay ")
                    console.table(shopphone[vitri_input])
                }else{
                    alert("khong tim thay, xin vui long thu lai")
                }
                break;
                case 4:
                    let muahang = prompt("Mời bạn nhập tên hoặc ID điện thoại muốn mua:");
                    let VTmuahang = shopphone.findIndex(function (sl) {
                        return sl.id == muahang || sl.name.toLowerCase() === muahang.toLowerCase();
                    });
                    if (VTmuahang !== -1) {
                        let soluongmuonmua;
                        do {
                            soluongmuonmua = +prompt("Mời bạn nhập số lượng muốn mua:");
                            if (!checksoluong(soluongmuonmua) || soluongmuonmua > shopphone[VTmuahang].quantity) {
                                alert("Số lượng không hợp lệ hoặc vượt quá số lượng trong kho.");
                            }
                        } while (!checksoluong(soluongmuonmua) || soluongmuonmua > shopphone[VTmuahang].quantity);
       
                        shopphone[VTmuahang].quantity -= soluongmuonmua;
            
                        let shopping = {
                            name: shopphone[VTmuahang].name,
                            price: shopphone[VTmuahang].monny,
                            quantity: soluongmuonmua
                        };
                        giohang.push(shopping);
                        console.log(`Bạn đã mua ${soluongmuonmua} chiếc ${shopphone[VTmuahang].name}.`);
                        console.table(giohang);
                    } else {
                        alert("Không tìm thấy ID hoặc tên điện thoại trong cửa hàng.");
                    }
                    break;  
                    case 6 :
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
                            bookstore.sort((a, b) => a.monny - b.monny); 
                            console.log("Sắp xếp theo giá tăng dần:");
                        } else if (lc === 2) {
                            bookstore.sort((a, b) => b.monny - a.monny);
                            console.log("Sắp xếp theo giá giảm dần:");
                        } else {
                            alert("Lựa chọn không hợp lệ!");
                            break;
                        }
                    
                        console.table(shopphone);
                        break;
                        case 7:
                            if (shopphone.length === 0) {
                                alert("Kho hàng trống!");
                            } else {
                                let tongGiaTri = shopphone.reduce((sum, sp) => sum + sp.monny * sp.quantity, 0);
                                alert(`Tổng giá trị hàng trong kho: ${tongGiaTri.toLocaleString()} VND`);
                            }
                            break;
                        
                        case 8:
                            if (shopphone.length === 0) {
                                alert("Kho hàng trống!");
                            } else {
                                let thongKe = {};
                                shopphone.forEach(sp => {
                                    thongKe[sp.phone_company] = (thongKe[sp.phone_company] || 0) + sp.quantity;
                                });
                        
                                console.log("Tổng số lượng điện thoại theo hãng:");
                                for (let hang in thongKe) {
                                    console.log(`${hang}: ${thongKe[hang]} chiếc`);
                                }
                            }
                            break;
                        
        }
    }