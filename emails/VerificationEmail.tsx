
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({
  username,
  otp,
}: VerificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Your verification code is {otp}</Preview>

      <Tailwind>
        <Body className="bg-slate-100 py-10 font-sans">
          <Container className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-lg">

            {/* Logo / Brand */}
            <Section className="text-center">
              <Heading className="m-0 text-3xl font-bold text-slate-900">
                Anonymous Message
              </Heading>
              <Text className="mt-2 text-slate-500">
                Secure Account Verification
              </Text>
            </Section>

            <Hr className="my-6 border-slate-200" />

            {/* Welcome */}
            <Heading className="text-2xl font-semibold text-slate-900">
              Verify Your Email
            </Heading>

            <Text className="text-base leading-7 text-slate-700">
              Hi <strong>{username}</strong>,
            </Text>

            <Text className="text-base leading-7 text-slate-700">
              Thank you for registering. Please use the verification code
              below to complete your account setup.
            </Text>

            {/* OTP Box */}
            <Section className="my-8 text-center">
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-6 py-5">
                <Text className="m-0 text-sm uppercase tracking-widest text-slate-500">
                  Verification Code
                </Text>

                <Text className="m-0 mt-3 text-4xl font-bold tracking-[12px] text-slate-900">
                  {otp}
                </Text>
              </div>
            </Section>

            <Text className="text-base leading-7 text-slate-700">
              This code will expire in <strong>10 minutes</strong>.
            </Text>

            <Text className="text-base leading-7 text-slate-700">
              If you didn't create an account, you can safely ignore this
              email.
            </Text>

            <Hr className="my-6 border-slate-200" />

            <Text className="text-center text-xs text-slate-500">
              © {new Date().getFullYear()} Anonymous Message.
              All rights reserved.
            </Text>

          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

