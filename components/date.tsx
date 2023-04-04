//https://nextjs.org/learn/basics/dynamic-routes/polishing-post-page
//https://date-fns.org/
// This file was renamed "date.js" to "date.tsx";

import { parseISO, format } from "date-fns";

export default function Date({ dateString }: {dateString: string}) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
