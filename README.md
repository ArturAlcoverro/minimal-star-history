<div align="center">

🧩 [**Also available as a Chrome extension**](https://chrome.google.com/webstore/detail/star-history/iijibbcdddbhokfepbblglfgdglnccfn)

# :sparkles: Star History :sparkles:

[**star-history.com**](https://star-history.com), **the ~~missing~~ minimal GitHub star history graph of GitHub repos.**

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=star-history/star-history&type=Date&theme=dark" />
  <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=star-history/star-history&type=Date" />
  <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=star-history/star-history&type=Date" />
</picture>

👆 **THIS** is a **`live`** chart created with the following html: 👇

<div align="left">

```html
<picture>
  <source
    media="(prefers-color-scheme: dark)"
    srcset="
      https://api.star-history.com/svg?repos=star-history/star-history&type=Date&theme=dark
    "
  />
  <source
    media="(prefers-color-scheme: light)"
    srcset="
      https://api.star-history.com/svg?repos=star-history/star-history&type=Date
    "
  />
  <img
    alt="Star History Chart"
    src="https://api.star-history.com/svg?repos=star-history/star-history&type=Date"
  />
</picture>
```

</div>

</div>

---
cd backend && pnpm i && pnpm dev
```

The API server will be running on http://localhost:8080.
