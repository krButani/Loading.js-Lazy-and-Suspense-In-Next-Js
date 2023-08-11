import { Suspense } from "react";
import * as t from "./lazyload";
import Loading from "./mloading";

export default function LazyDemoM() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <div>{t.TMKOCyoutube}</div>
      </Suspense>
    </div>
  );
}
