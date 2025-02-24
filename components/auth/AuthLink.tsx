import NextLink from 'next/link';
import { Button, Divider } from '@nextui-org/react';

const AuthLinks = () => {
  return (
    <div className="flex items-center space-x-4">
      {/*Register*/}
      <div>
        <NextLink
          href="/register"
          className=" inline-flex animate-text-gradient bg-[linear-gradient(90deg,#EAB318_0%,#EC4950_50%,#EAB408_100%)] bg-clip-text  text-medium font-medium text-transparent hover:bg-transparent/50 dark:bg-[linear-gradient(90deg,#EAB308_0%,#EC4899_50%,#EAB308_100%)] md:ml-1"
          style={{
            backgroundSize: '200%',
          }}
        >
          Register
        </NextLink>
      </div>
      <Divider
        className={'h-10 w-[1px] bg-gradient-to-b from-pink-500 to-yellow-500'}
        orientation="vertical"
      />
      <div>
        <NextLink href="/login">
          <div className="st-current group relative flex min-w-[120px] items-center gap-2 overflow-hidden rounded-full border-0 p-[2px] font-semibold text-gray-50 outline-0 dark:text-gray-100 ">
            <span
              className="absolute inset-[-100%] animate-[spin_3s_linear_infinite]
                 bg-[conic-gradient(from_90deg_at_50%_50%,#EAB318_0%,#EC4899_50%,#EAB408_100%)]
                 dark:bg-[conic-gradient(from_90deg_at_50%_50%,#EAB308_0%,#EC4899_50%,#EAB308_100%)]"
            ></span>
            <Button
              size="md"
              variant={'solid'}
              className="inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-transparent/0 text-sm  font-medium text-gray-50 backdrop-blur-3xl transition-all ease-linear group-hover:bg-transparent/20 dark:bg-transparent dark:text-gray-100"
            >
              Login
            </Button>
          </div>
        </NextLink>
      </div>
    </div>
  );
};

export default AuthLinks;
