let round = 1;
var items = ['เป็นไก่','ต่อราคา','ยิ้มแบบขมขื่น','เดินแบบ','สั่งทำความเคารพ','เบ่งกล้าม','ได้กลิ่นเหม็นมากๆ','ตาบอด','อยู่ๆ ก็สลับเพศ','สารภาพรักกับรุ่นพี่ที่แอบชอบ','เต้นแบบหุ่นเป่าลมหน้าปั๊ม','พึ่งเข้าใจความหมายของชีวิต','ยกของหนักมากๆ','พูดว่า "ถ้าฟ้าเสียตัว ฟ้าต้องได้เป็นแอร์"','Come Out กับแม่ว่าเป็นกะเทย','ความจำเสื่อม','กระทืบเท้า','หน้ามืด ตาลาย','เจ็บหลัง','รู้สึกว่ามีคนแอบตาม','ปฏิเสธคนที่มาสารภาพรัก','ส่งจูบให้กับแฟนคลับ','เป็นผู้ดีชาวอังกฤษ','อิ่มมาก','จู่ๆ ก็เห็นว่าตัวเองไม่มีมือ','เปิดเผยความจริงว่า "ชั้นนี่แหละที่ฆ่าพ่อแก"','แนะนำตัวแบบเท่ๆ ด้วยการพูดว่า " ชั้นชื่อ <ชื่อเล่น> ... <ชื่อเล่น>  <ชื่อจริง>"','หัวเราะแบบนางร้ายในละคร','อยู่ๆ ก็เจ็บหน้าอก','ตีเทนนิสได้เก่งมาก','ให้อภัยตัวเอง','ทำท่าอะไรก็ได้ที่ทำให้ KO ศัตรู','กัดปากแบบเซ็กซี่','ถอยจอดรถ','บรรลุทางธรรม','ใส่คอนแทคเลนส์ครั้งแรก','ปั๊มหัวใจ','แปลงร่างเป็นสาวน้อยเวทย์มนต์','แหงนมองฟ้า และพูดว่า "โลกนี้ช่างกว้างใหญ่นัก"','นั่งเก้าอี้แบบเท่ๆ','ทำท่าว่าคิดออกแล้ว','บอกคนที่รักด้วยควาามสลดว่า "ฉันคงอยู่ได้อีกไม่นาน"','เซ็ทผม','โพสท่าถ่ายรูป','ทำท่าเขินแบบสาวน้อยในอนิเมะ'];

function random() {
    const selectedItems = [];

    // Randomly select 3 unique items
    for (let i = 0; i < 2; i++) {
        if (items.length === 0) break;
        const randomIndex = Math.floor(Math.random() * items.length);
        const selectedItem = items[randomIndex];
        selectedItems.push(selectedItem);
        items.splice(randomIndex, 1); // Remove selected item from array
    }

    // Display selected items in the HTML elements
    for (let i = 1; i <= 2; i++) {
        const textElement = document.getElementById("text" + i);
        if (selectedItems[i - 1]) {
            textElement.innerText = selectedItems[i - 1];
        } else {
            textElement.innerText = "No item";
        }
    }

    // Increment the round counter
    document.getElementById("round").innerText = "Round: " + round++ + "/23";
}

// Event listener for button click
document.getElementById("Button").addEventListener("click", random);
random();