# ✅ Checklist de Configuración - Amparos de Salud

## 📋 Tareas Completadas

- ✅ Página `/amparos-de-salud` creada con contenido optimizado
- ✅ Meta tags para SEO (title, description, Open Graph)
- ✅ Diseño responsive mobile-first
- ✅ Formulario de contacto integrado
- ✅ CTAs a WhatsApp y teléfono
- ✅ Google Tag Manager integrado
- ✅ Link agregado al navbar principal
- ✅ Sitemap actualizado
- ✅ Página de agradecimiento `/gracias`

---

## 🔧 Configuración Pendiente (IMPORTANTE)

### 1. Actualizar Números de Contacto

**Archivos a modificar:**
- `/app/amparos-de-salud/page.tsx`
- `/app/gracias/page.tsx`

**Buscar y reemplazar:**
```
5492914000000
```

**Con el número real en formato internacional:**
```
5492914XXXXXX  (Ejemplo: 549291XXXXXXX para Bahía Blanca)
```

> **Formato**: `549` + código de área sin 0 + número sin 15

### 2. Configurar Formulario de Contacto

**Opción A - Formspree (Recomendado, gratis hasta 50 envíos/mes):**

1. Crear cuenta en [https://formspree.io](https://formspree.io)
2. Crear nuevo formulario
3. Copiar el Form ID (ejemplo: `xpznxxxx`)
4. En `/app/amparos-de-salud/page.tsx`, línea ~186, cambiar:
   ```tsx
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Por:
   ```tsx
   <form action="https://formspree.io/f/xpznxxxx" method="POST">
   ```

**Opción B - Email directo (requiere backend):**
- Configurar endpoint API en `/app/api/contact/route.ts`
- Usar SendGrid, Nodemailer o Resend

### 3. Configurar Google Tag Manager (Para Google Ads)

**Paso 1 - Crear cuenta GTM:**
1. Ir a [https://tagmanager.google.com](https://tagmanager.google.com)
2. Crear cuenta nueva
3. Crear contenedor web para el sitio
4. Copiar el ID del contenedor (ej: `GTM-ABC1234`)

**Paso 2 - Agregar ID al proyecto:**
1. Crear archivo `.env.local` en la raíz del proyecto:
   ```bash
   NEXT_PUBLIC_GTM_ID=GTM-ABC1234
   ```

**Paso 3 - Configurar conversión en GTM:**
1. En GTM, ir a **Tags** → **New**
2. Nombre: "Google Ads - Lead Amparo de Salud"
3. Tipo de etiqueta: **Google Ads Conversion Tracking**
4. Configuración:
   - Conversion ID: (obtener de Google Ads)
   - Conversion Label: (obtener de Google Ads)
5. Disparador:
   - Evento: `Form Submission`
   - Condición: URL contiene `/amparos-de-salud`

**Paso 4 - Conectar con Google Ads:**
1. En Google Ads, ir a **Herramientas** → **Conversiones**
2. Crear nueva conversión tipo "Envío de formulario"
3. Copiar el Conversion ID y Label
4. Pegarlos en el Tag de GTM del Paso 3

### 4. Variables de Entorno en Producción (Vercel)

Si vas a deployar en Vercel:

1. Ir al dashboard del proyecto
2. **Settings** → **Environment Variables**
3. Agregar:
   - `NEXT_PUBLIC_GTM_ID` = `GTM-ABC1234`

### 5. Verificar Dominio

Asegurarse que `www.mglegales.com` apunte al deploy:

**DNS Records necesarios:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 🧪 Testing

### Antes de hacer deploy:

```bash
# Instalar dependencias
pnpm install

# Ejecutar en desarrollo
pnpm dev
```

Verificar:
- [ ] La página `/amparos-de-salud` carga correctamente
- [ ] El navbar tiene el link a "Amparos de Salud"
- [ ] Los botones de WhatsApp y teléfono funcionan
- [ ] El formulario se envía correctamente
- [ ] La página es responsive en mobile
- [ ] La página `/gracias` muestra después de enviar formulario

### Después de hacer deploy:

- [ ] Verificar URL: `https://www.mglegales.com/amparos-de-salud`
- [ ] Probar formulario en producción
- [ ] Verificar tracking en GTM (modo Preview)
- [ ] Hacer conversión de prueba en Google Ads

---

## 🚀 Deploy

```bash
# Opción 1: Deploy automático con Vercel
vercel

# Opción 2: Push a GitHub (si tienes Vercel conectado)
git add .
git commit -m "feat: agregar página de amparos de salud"
git push origin main
```

---

## 📊 Monitoreo de Conversiones

Una vez configurado GTM:

1. En Google Ads, ir a **Campañas** → Tu campaña
2. Verificar que aparezcan conversiones
3. En GTM, usar **Preview Mode** para debuggear eventos

---

## 🆘 Soporte

Si necesitás ayuda con:
- Configuración de Formspree
- Setup de Google Tag Manager
- Deploy en Vercel
- Cualquier error técnico

Contactá al desarrollador con los logs de error.

---

## 📝 URLs Importantes

- **Página principal**: `https://www.mglegales.com`
- **Amparos de Salud**: `https://www.mglegales.com/amparos-de-salud`
- **Gracias**: `https://www.mglegales.com/gracias`
- **Sitemap**: `https://www.mglegales.com/sitemap.xml`
