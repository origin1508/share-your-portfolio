class Validation {
    // Check validation form

    // Award
    // award의 title과 description의 길이는 앞 뒤 공백 제거 기준 5글자 이상이어야 한다.
    static validateAwardTitle(title) {
        const checkTitle = title.trim();
        if (checkTitle.length < 5) return false;
        return true;
    }

    static validateAwardDetail(detail) {
        const checkDetail = detail.trim();
        if (checkDetail.length < 5) return false;
        return true;
    }

    // User
    // 사용자의 비밀번호는 공백을(" ") 포함하면 안된다.
    // 사용자의 비밀번호의 길이는 5글자 이상이어야 한다.
    // 사용자의 비밀번호는 영문, 숫자 포함 6 ~ 12까지의 길이이다.
    static validateUserEmail(email) {
        return email
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }

    static validateUserPassword(password) {
        if (password.includes(" ")) return false;
        if (password.length < 5) return false;
        return password.match(/^[A-Za-z0-9]{6,12}$/);
    }

    static validUserDescription(description) {
        if (description.length < 1) return false;
        return true;
    }
}

Object.freeze(Validation);
export default Validation;
