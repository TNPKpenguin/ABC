function getBotResponse(input) {
    //rock paper scissors
    //console.log(input+"2")
    if (input == "ปวดหัวมากค่ะ") {
        return "ปวดมานานหรือยังคะ";
    } else if (input == "ปวดหัวข้างเดียวค่ะ") {
        return "ปวดแบบไหนคะ";
    } else if (input == "ปวดเป็นแบบตุบๆ") {
        return "ก่อนปวดหัวมีอาการอื่นไหมคะ เช่นภาพเบลอ เห็นแสงวูบวาบ";
    }
     else if (input == "มีค่ะ") {
        return "ปวดประมาณกี่นาทีคะ";
    }
    else if (input == "10-30ค่ะ") {
        return "จากการวิจฉัยเบื้องต้นน่าจะเป็น ไมเกรนค่ะ";
    }
    else if (input == "i love u") {
        return "Fuck U";
    }
    else if (input == "jj") {
        return "Fuck U";
    }
    else if (input == "beam") {
        return "narak";
    }
    

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "ลองพิมพ์ใหม่ค่ะ";
    }
    
}