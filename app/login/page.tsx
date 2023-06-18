'use client'
import {
    Dispatch,
    SetStateAction,
    useCallback,
    useMemo,
    useState,
} from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const SignInModal = ({
    showSignInModal,
    setShowSignInModal,
}: {
    showSignInModal: boolean;
    setShowSignInModal: Dispatch<SetStateAction<boolean>>;
}) => {
    const [signInClicked, setSignInClicked] = useState(false);

    return (
        <div >
            <div className="w-full overflow-hidden shadow-xl md:max-w-md md:rounded-2xl md:border md:border-gray-200">
                <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center md:px-16">
                    <a href="https://precedent.dev">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            className="h-10 w-10 rounded-full"
                            width={20}
                            height={20}
                        />
                    </a>
                    <h3 className="font-display text-2xl font-bold">Sign In</h3>
                    <p className="text-sm text-gray-500">
                        This is strictly for demo purposes - only your email and profile
                        picture will be stored.
                    </p>
                </div>

                <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-16">
                    <button
                        disabled={signInClicked}
                        className={`${signInClicked
                            ? "cursor-not-allowed border-gray-200 bg-gray-100"
                            : "border border-gray-200 bg-white text-black hover:bg-gray-50"
                            } flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
                        onClick={() => {
                            setSignInClicked(true);
                            router.push('/about');
                            // signIn("google");
                        }}
                    >
                        <p>Sign In with Google</p>

                    </button>
                    <Link href="https://open.feishu.cn/open-apis/authen/v1/user_auth_page_beta?app_id=cli_a23b8326f438100b&redirect_uri=http%3A%2F%2F127.0.0.1%3A3001%3F%26entity_code%3Dlb&state=">bbb</Link>
                </div>
            </div>
        </div>
    );
};

export default SignInModal;