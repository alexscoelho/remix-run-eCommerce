import { Link } from "@remix-run/react";
export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix eCommerce</h1>
      <ul>
        <li>
          <a
            target='_blank'
            href='https://remix.run/tutorials/blog'
            rel='noreferrer'
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://remix.run/tutorials/jokes'
            rel='noreferrer'
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target='_blank' href='https://remix.run/docs' rel='noreferrer'>
            Remix Docs
          </a>
        </li>
        <li>
          <Link to='/posts' className='text-xl text-blue-600 underline'>
            Blog Posts
          </Link>
        </li>
        <li>
          <Link to='/gallery' className='text-xl text-blue-600 underline'>
            Image Gallery
          </Link>
        </li>
      </ul>
    </div>
  );
}
