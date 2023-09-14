import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

function App5() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/users/*" element={<Users />}>
          <Route path="coupon/" element={<CouponPage />} />
          <Route path="question/" element={<QuestionPage />} />
          <Route path="notice/" element={<NoticePage />} />
        </Route>

        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route
          path="/products/:id/notice"
          element={<ProductDetailNoticePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

function ProductDetailNoticePage() {
  const { id } = useParams();
  return <h1>{id}번 상품 상세 알림? 페이지</h1>;
}

function CouponPage() {
  return <h1>쿠폰</h1>;
}

function NoticePage() {
  return <h1>알림</h1>;
}

function QuestionPage() {
  return <h1>?</h1>;
}

function ProductDetailPage() {
  const { id } = useParams();
  return <h1>{id}번 상품 입니다~!</h1>;
}

function Cart() {
  return <h1>카트</h1>;
}

function Users() {
  return <h1>유저들</h1>;
}

function HomePage() {
  return <h1>홈페이지</h1>;
}

export default App5;
