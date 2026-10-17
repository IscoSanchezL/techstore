# TechStore

Tienda y panel de administración.

| Pieza | Dónde |
|---|---|
| Código | Este repo (rama `main`) |
| Publicación | Firebase Hosting, proyecto `techstore-4eea2` |
| Login del panel y datos | Firebase Authentication y Firestore |

## Publicar

Un `git push` a `main` publica solo, con GitHub Actions (`.github/workflows/firebase-hosting-merge.yml`).
Cada pull request genera además una URL de vista previa (`firebase-hosting-pull-request.yml`), sin tocar el sitio en línea.

Requiere el secreto `FIREBASE_SERVICE_ACCOUNT_TECHSTORE_4EEA2` en
Settings → Secrets and variables → Actions.
