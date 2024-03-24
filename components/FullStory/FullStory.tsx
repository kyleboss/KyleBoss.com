import Script from "next/script";

export default function FullStory() {
  const orgId = process.env.NEXT_PUBLIC_FULLSTORY_ORG_ID;

  return (
    <Script
      strategy="afterInteractive"
      src={`https://edge.fullstory.com/s/fs.js`}
      onLoad={() => {
        (window as any)["_fs_debug"] = false;
        (window as any)["_fs_host"] = "fullstory.com";
        (window as any)["_fs_script"] = "edge.fullstory.com/s/fs.js";
        (window as any)["_fs_org"] = orgId;
        (window as any)["_fs_namespace"] = "FS";
        (window as any)["FS"] && (window as any)["FS"].init({ orgId });
      }}
    />
  );
}
