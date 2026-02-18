# Brians Ostebiks
Brian Emilius, WU13

## Tech stack

- **Nextjs** er et Javascript framework, som er komponent-baseret. Frameworket har fil-baseret routing og giver mulighed for at afvikle kode og komponenter på serveren. Jeg har valgt at bruge netop dette framework fordi der allerede er taget en lang række strukturelle valg for mig, for eksempel måden at opbygge routeren på.  
Noget om en større community, større økosystem, større efterspørgsel på arbejdsmarkedet.
- API
- Tailwind
- Typescript

## Kodeeksempel

[dal.js](./src/lib/dal.js)
```javascript
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getAllEvents() {
  const cookieStore = await cookies();
  // guard clause
  if(!cookieStore.has('accessToken')) return redirect("/no-access");

  const response = await fetch("http://localhost:4000/events");
  const data = await response.json();
  return data;
}
```

(Hvad er det?)
Jeg har lavet en funktion, som er en server action.
(Hvad er formålet?)
Formålet er at hente data fra et API og returnere dataen.
(Hvordan sker det?)
Jeg bruger `fetch`-APIet til at lave en HTTP Request til web-APIet og jeg har lavet en guard clause i toppen af funktionen, som tjekker om `accessToken`-cookien findes.

(gå meget i detaljer med et enkelt element fra eksemplet)

## Perspektivering
argumenter: kode-struktur, små genbrugelige komponenter og funktioner, navngivningskonventioner, platform til production miljøet