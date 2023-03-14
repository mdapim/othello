export default function ItemCard({ text, source }) {
  return (
    <div class="flex justify-center h-64">
      <div class="rounded-lg shadow-lg bg-white max-w-xs relative">
        <a
          href="#!"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          data-mdb-ripple-unbound="true"
        >
          <img
            class="rounded-lg object-fill brightness-75"
            src={source}
            alt=""
          />
          <h5 class="text-white text-xl font-medium mb-2 bottom-0 absolute p-4">
            {text}
            <hr class="w-64 h-px my-1 bg-white border-0 dark:bg-white" />
          </h5>
        </a>
      </div>
    </div>
  );
}
