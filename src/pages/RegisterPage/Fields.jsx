const fields = {
    name: {
        type: "text",
        name: "name",
        required: true,
        label: "User name",
        placeholder: "Введіть ім'я",
    },
    email: {
        type: "email",
        name: "email",
        required: true,
        label: "User email",
        placeholder: "Введіть пошту",
    },
    password: {
        type: "password",
        name: "password",
        required: true,
        label: "User password",
        placeholder: "Введіть пароль",
    },
};

export default fields;