# MG Legales - Abogados Bahía Blanca

Sitio web del estudio de abogados especializado en amparos de salud.

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
pnpm install

# Ejecutar en desarrollo
pnpm dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## 📋 Configuración

### 1. Variables de Entorno

Crear un archivo `.env.local` basado en `.env.local.example`:

```bash
cp .env.local.example .env.local
```

Completar las variables:

- **`NEXT_PUBLIC_GTM_ID`**: ID de Google Tag Manager (ej: `GTM-XXXXXXX`)
- **`NEXT_PUBLIC_FORMSPREE_ID`**: ID del formulario de Formspree (opcional)

### 2. Google Tag Manager (para Google Ads tracking)

1. Crear cuenta en [Google Tag Manager](https://tagmanager.google.com)
2. Crear un nuevo contenedor para el sitio web
3. Copiar el ID del contenedor (GTM-XXXXXXX)
4. Agregar el ID en `.env.local`

Para trackear conversiones de Google Ads:
1. En GTM, ir a **Tags** → **New**
2. Seleccionar **Google Ads Conversion Tracking**
3. Configurar el Conversion ID y Conversion Label de Google Ads
4. Agregar trigger: evento personalizado `form_submit` o `contact_form`

### 3. Formulario de Contacto

El formulario usa Formspree para enviar emails. Para configurarlo:

1. Crear cuenta en [Formspree](https://formspree.io)
2. Crear un nuevo formulario
3. Copiar el Form ID
4. Actualizar la URL del formulario en `/app/amparos-de-salud/page.tsx`:

```tsx
<form action="https://formspree.io/f/TU_FORM_ID" method="POST">
```

**Alternativa**: Recibir formularios por email sin Formspree:
- Configurar un endpoint API en `/app/api/contact/route.ts` con Nodemailer o SendGrid

### 4. Números de Teléfono y WhatsApp

Actualizar los números de contacto en:
- `/app/amparos-de-salud/page.tsx`
- Buscar `5492914000000` y reemplazar con el número real (formato: código país + código área + número)

## 📁 Estructura del Proyecto

```
app/
  ├── amparos-de-salud/     # Landing page optimizada para SEO
  │   └── page.tsx
  ├── gracias/              # Página de agradecimiento post-formulario
  │   └── page.tsx
  ├── layout.tsx            # Layout principal con GTM
  ├── page.tsx              # Homepage
  └── sitemap.js            # Sitemap para SEO

components/
  ├── navbar.tsx            # Navegación (incluye link a /amparos-de-salud)
  ├── footer.tsx
  └── ui/                   # Componentes de shadcn/ui

lib/
  ├── gtm.tsx               # Integración Google Tag Manager
  └── utils.ts
```

## 🎯 Página de Amparos de Salud

**URL**: [https://www.mglegales.com/amparos-de-salud](https://www.mglegales.com/amparos-de-salud)

### Características implementadas:
- ✅ URL amigable `/amparos-de-salud`
- ✅ Meta tags optimizados para SEO
- ✅ Diseño responsive mobile-first
- ✅ Formulario de contacto
- ✅ CTAs a WhatsApp y teléfono
- ✅ Google Tag Manager integrado
- ✅ Agregado al sitemap
- ✅ Link en el navbar principal

### SEO Optimización:
- **Title**: "Amparos de Salud — MG Abogados Bahía Blanca | Amparo por medicación y tratamientos"
- **Description**: Optimizada para búsquedas locales
- **Open Graph**: Para compartir en redes sociales

## 📊 Tracking de Conversiones

Para trackear cuando un usuario envía el formulario:

```typescript
import { trackConversion } from '@/lib/gtm'

// Al enviar el formulario
trackConversion('form_submit', {
  form_name: 'amparos_de_salud',
  form_location: '/amparos-de-salud'
})
```

## 🚢 Deploy

### Vercel (recomendado)

```bash
# Instalar Vercel CLI
pnpm i -g vercel

# Deploy
vercel
```

Configurar las variables de entorno en el dashboard de Vercel.

### Otros proveedores

El proyecto es compatible con cualquier hosting que soporte Next.js 14+:
- Netlify
- Railway
- DigitalOcean App Platform

## 📝 Próximos Pasos

1. **Actualizar números de contacto** en todos los archivos
2. **Configurar Formspree** o implementar backend para formularios
3. **Agregar Google Tag Manager ID** en variables de entorno
4. **Configurar conversión en Google Ads**
5. **Verificar dominio** www.mglegales.com apunta al deploy
6. **Probar formulario** y tracking de conversiones

## 🛠 Tecnologías

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Analytics**: Vercel Analytics + Google Tag Manager
- **Forms**: Formspree (configurable)

## 📞 Soporte

Para consultas técnicas o modificaciones, contactar al desarrollador.
