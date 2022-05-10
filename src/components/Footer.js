function Footer() {
  return (
    <footer class="flex">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        ©
        {" "}
        {new Date().getFullYear()}
        {" "}
        Developed & designed by @ 
        <a href="https://mariahtao.dev" class="font-semibold hover:bg-white p-0 text-blue-700 hover:text-blue-800">
          mariahtao.dev →
        </a>
      </span>
    </footer>
  );
}

export default Footer;
