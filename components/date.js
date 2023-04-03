//https://nextjs.org/learn/basics/dynamic-routes/polishing-post-page
//https://date-fns.org/

import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
