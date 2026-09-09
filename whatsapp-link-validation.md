# WhatsApp Link Validation

## Desktop sandbox check

| Check | Result |
|---|---|
| Sandbox button | The fixed logo-only WhatsApp button was visible and keyboard-addressable. |
| Exit warning | Traditional Chinese warning opened before leaving DILLIZ; Cancel and Continue controls were present. |
| Destination | Continued to `https://api.whatsapp.com/send/?phone=85265286838&text&type=phone_number&app_absent=0`. |
| Contact identity | WhatsApp displayed **Dilliz Customer Service** with the DILLIZ profile image. |
| Desktop choices | **Open app** and **Continue to WhatsApp Web** were displayed. |
| Message safety | No message text was prefilled and no message was sent. |

Production, GitHub, gh-pages and cPanel were not changed during this check.

## Mobile sandbox check

| Check | Result |
|---|---|
| Mobile visibility | The fixed WhatsApp logo was visible at 390×844 with safe spacing from the right and bottom edges. |
| iPhone redirect | An iPhone Safari user agent received `HTTP 302` from `https://wa.me/85265286838`. |
| Final mobile destination | `https://api.whatsapp.com/send/?phone=85265286838&text&type=phone_number&app_absent=0&wame_ctl=1`. |
| Contact identity | The final page identified **Dilliz Customer Service**. |
| App handoff | The WhatsApp landing page provides the app-opening path; if the app is unavailable, the browser landing page remains available. |
| Message safety | The `text` parameter is empty; no message is composed or sent automatically. |
| Browser safety | DILLIZ opens the destination in a new tab with `noopener,noreferrer`; Cancel closes the warning without navigation. |

## Conclusion

The desktop and mobile destinations both resolve to the correct DILLIZ WhatsApp account for `+852 6528 6838`. A user must still choose WhatsApp's app/web action and manually send a message.
