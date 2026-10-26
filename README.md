# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# F8 Zoom Day 41 — Redux Advanced

Dự án thực hành React nâng cao với trọng tâm là Redux Architecture, Axios Integration và Environment Variables. Ứng dụng xây dựng giao diện thương mại điện tử đơn giản, cho phép xem danh sách sản phẩm và thông tin chi tiết của từng sản phẩm.

## 📌 Thông tin dự án

- **Repository:** [f8-zoom-day41](https://github.com/hungomega/f8-zoom-day41)
- **Chủ đề:** Redux Advanced — Axios, ENV & Redux Architecture
- **Framework:** React + Vite
- **Ngôn ngữ:** JavaScript
- **Build tool:** Vite
- **Deploy:** GitHub Pages

## 🚀 Công nghệ sử dụng

- React
- Vite + SWC
- React Router
- Redux
- React Redux
- Redux Thunk
- Redux Logger
- Axios
- SCSS Modules
- GitHub Pages

## 🎯 Mục tiêu

- Tổ chức Redux theo Feature-based Architecture.
- Quản lý state tập trung bằng Redux.
- Xử lý API bất đồng bộ bằng Redux Thunk.
- Tạo Axios instance và chuẩn hóa dữ liệu trả về.
- Sử dụng Environment Variables để cấu hình API.
- Quản lý trạng thái loading toàn ứng dụng.
- Xây dựng các trang danh sách và chi tiết sản phẩm.
- Triển khai ứng dụng React lên GitHub Pages.

## ✨ Chức năng

### 1. Product List

Đường dẫn: `/products`

- Lấy danh sách sản phẩm từ API.
- Hiển thị sản phẩm theo dạng lưới.
- Hiển thị hình ảnh, tên, mô tả và giá sản phẩm.
- Hiển thị giá sau khi áp dụng giảm giá.
- Nhấn vào sản phẩm để xem thông tin chi tiết.

### 2. Product Detail

Đường dẫn: `/products/:slug`

- Lấy `slug` từ URL bằng React Router.
- Gọi API để lấy thông tin sản phẩm tương ứng.
- Hiển thị thông tin chi tiết sản phẩm.
- Hiển thị giá gốc, phần trăm giảm giá và giá sau giảm.
- Có liên kết quay lại danh sách sản phẩm.

### 3. Global Loading

- Quản lý trạng thái loading bằng Redux.
- Hiển thị loading overlay trong quá trình gọi API.
- Tự động ẩn loading sau khi hoàn tất yêu cầu.

### 4. Redux Architecture

Dự án chia Redux thành các module theo chức năng:

- `product`: Quản lý danh sách và chi tiết sản phẩm.
- `ui`: Quản lý trạng thái giao diện, bao gồm loading.
- `store`: Kết hợp reducers và cấu hình middleware.

### 5. Axios & Environment Variables

- Sử dụng Axios instance để cấu hình HTTP client.
- Đọc địa chỉ API từ biến môi trường `VITE_BASE_API`.
- Chuẩn hóa dữ liệu trả về thông qua các phương thức HTTP.
- Xử lý lỗi API theo cách thống nhất.

## 📁 Cấu trúc thư mục

```text
f8-zoom-day41/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Loading/
│   │   │   ├── Loading.module.scss
│   │   │   └── index.jsx
│   │   └── ProductCard/
│   │       ├── ProductCard.module.scss
│   │       └── index.jsx
│   ├── pages/
│   │   ├── Home/
│   │   ├── ProductList/
│   │   │   ├── ProductList.module.scss
│   │   │   └── index.jsx
│   │   └── ProductDetail/
│   │       ├── ProductDetail.module.scss
│   │       └── index.jsx
│   ├── store/
│   │   ├── product/
│   │   │   ├── actions.js
│   │   │   ├── constants.js
│   │   │   ├── hooks.js
│   │   │   ├── index.js
│   │   │   ├── reducer.js
│   │   │   └── selectors.js
│   │   ├── ui/
│   │   │   ├── actions.js
│   │   │   ├── constants.js
│   │   │   ├── hooks.js
│   │   │   ├── index.js
│   │   │   ├── reducer.js
│   │   │   └── selectors.js
│   │   └── store.js
│   ├── utils/
│   │   └── http.js
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## ⚙️ Cài đặt và chạy dự án

### Yêu cầu

- Node.js
- npm
- Git

### Bước 1: Clone repository

```bash
git clone https://github.com/hungomega/f8-zoom-day41.git
cd f8-zoom-day41
```

### Bước 2: Cài đặt dependencies

```bash
npm install
```

### Bước 3: Cấu hình Environment Variables

Tạo file `.env.local` tại thư mục gốc:

```env
VITE_BASE_API=https://api01.f8team.dev/api
```

File `.env.example` được sử dụng làm mẫu cấu hình cho những người clone dự án.

Lưu ý: `.env.local` không nên được commit lên Git.

### Bước 4: Chạy môi trường development

```bash
npm run dev
```

### Bước 5: Build production

```bash
npm run build
```

### Bước 6: Xem thử bản production

```bash
npm run preview
```

## 🌐 API

Base URL:

```text
https://api01.f8team.dev/api
```

| Method | Endpoint | Chức năng |
|---|---|---|
| GET | `/products` | Lấy danh sách sản phẩm |
| GET | `/products/:slug` | Lấy thông tin chi tiết sản phẩm |

Địa chỉ API được cấu hình thông qua biến môi trường `VITE_BASE_API`.

## 🧩 Redux Modules

### Product Module

Quản lý dữ liệu sản phẩm với state:

```js
{
    list: [],
    detail: null
}
```

Các action types:

- `GET_LIST`
- `SET_LIST`
- `GET_DETAIL`
- `SET_DETAIL`

Các thành phần chính:

- `actions.js`: Action creators và thunk actions.
- `reducer.js`: Xử lý cập nhật state.
- `selectors.js`: Truy xuất dữ liệu từ store.
- `hooks.js`: Custom hooks cho React components.

### UI Module

Quản lý trạng thái giao diện:

```js
{
    isLoading: false
}
```

Các action types:

- `SHOW_LOADING`
- `HIDE_LOADING`

### Store Configuration

Store kết hợp reducer của các module và sử dụng middleware để xử lý tác vụ bất đồng bộ, đồng thời hỗ trợ debug trong môi trường development.

## 🚀 Deploy lên GitHub Pages

Dự án sử dụng Vite và được cấu hình cho repository `f8-zoom-day41`.

Trong `vite.config.js`:

```js
export default defineConfig({
    base: "/f8-zoom-day41/",
    plugins: [react()],
});
```

Trong `main.jsx`, React Router sử dụng basename tương ứng:

```jsx
<BrowserRouter basename="/f8-zoom-day41">
    <App />
</BrowserRouter>
```

Sau khi cấu hình GitHub Pages và workflow deploy thành công, website sẽ có địa chỉ:

**https://hungomega.github.io/f8-zoom-day41/**

## 📚 Kiến thức thực hành

- Redux Architecture Pattern
- Feature-based folder structure
- Redux Thunk và asynchronous actions
- Axios instance và HTTP wrappers
- Environment Variables với Vite
- React Router và dynamic routes
- Global loading state
- SCSS Modules
- Git workflow
- Vite production build
- GitHub Pages deployment

## 👨‍💻 Author

**hungomega**

GitHub: https://github.com/hungomega

---

Dự án thực hành trong quá trình học React và Redux nâng cao.
